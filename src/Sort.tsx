import React, { useEffect, useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FloatButton, Spin, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { HomeOutlined, SaveOutlined } from '@ant-design/icons';

interface DataType {
  id: string;
  title: string;
  order: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '唯一标识',
    dataIndex: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: 'order',
    dataIndex: 'order',
  },
];

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = (props: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

const SortTable = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const store = useStore();
  const { id } = useParams();
  const [dataSource, setDataSource] = useState<any[]>([]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
  );

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    store.service(`/article/${id}`).then((res) => {
      if (res.data.root) {
        store
          .service('/article/pid/0')
          .then((res) => {
            if (res.data) {
              setDataSource(res.data);
              setLoading(false);
            }
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        store
          .service(`/article/pid/${res.data.parent.id}`)
          .then((res) => {
            if (res.data) {
              setDataSource(res.data);
              setLoading(false);
            }
          })
          .catch(() => {
            setLoading(false);
          });
      }
    });
  }, [id]);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.id === active.id);
        const overIndex = prev.findIndex((i) => i.id === over?.id);
        const activeOrder = prev[activeIndex].order;
        const overOrder = prev[overIndex].order;
        prev[activeIndex].order = overOrder;
        prev[activeIndex].isSort = true;
        prev[overIndex].order = activeOrder;
        prev[overIndex].isSort = true;

        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return loading ? (
    <Spin size="large" />
  ) : (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={dataSource.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          pagination={false}
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
        />

        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton
            icon={<SaveOutlined />}
            onClick={() => {
              if (
                dataSource
                  .filter((item) => item.isSort)
                  .map((item) => ({ id: item.id, order: item.order }))
                  .length === 0
              ) {
                return;
              }

              store
                .service(`/article/updateOrder`, {
                  data: dataSource
                    .filter((item) => item.isSort)
                    .map((item) => ({ id: item.id, order: item.order })),
                  method: 'POST',
                })
                .then(() => {
                  navigate('/');
                });
            }}
          />

          <FloatButton
            icon={<HomeOutlined />}
            onClick={() => {
              navigate('/');
            }}
          />
        </FloatButton.Group>
      </SortableContext>
    </DndContext>
  );
};

export default SortTable;
