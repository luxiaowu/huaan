import { useState } from 'react';
import { Block } from '../../components/block';

// 定义乡镇数据类型
interface TownData {
  id: number;
  name: string;
  villageCount: number;
  population: number;
  leaders: Array<{
    name: string;
    position: string;
    contact: string;
  }>;
}

export function P4() {
  // 控制弹出框显示状态
  const [modalVisible, setModalVisible] = useState(false);
  // 当前选中的乡镇数据
  const [selectedTown, setSelectedTown] = useState<TownData | null>(null);

  // 乡镇数据
  const townData: TownData[] = [
    {
      id: 1,
      name: '华丰镇',
      villageCount: 5,
      population: 35682,
      leaders: [
        { name: '张三', position: '党委书记', contact: '13800138001' },
        { name: '李四', position: '镇长', contact: '13900139001' },
        { name: '王五', position: '副书记', contact: '13700137001' }
      ]
    },
    {
      id: 2,
      name: '丰山镇',
      villageCount: 3,
      population: 21354,
      leaders: [
        { name: '赵六', position: '党委书记', contact: '13600136001' },
        { name: '钱七', position: '镇长', contact: '13500135001' }
      ]
    },
    {
      id: 3,
      name: '沙建镇',
      villageCount: 3,
      population: 28741,
      leaders: [
        { name: '孙八', position: '党委书记', contact: '13400134001' },
        { name: '周九', position: '镇长', contact: '13300133001' }
      ]
    },
    {
      id: 4,
      name: '新圩镇',
      villageCount: 3,
      population: 19526,
      leaders: [
        { name: '吴十', position: '党委书记', contact: '13200132001' },
        { name: '郑一', position: '镇长', contact: '13100131001' }
      ]
    },
    {
      id: 5,
      name: '高安镇',
      villageCount: 3,
      population: 15328,
      leaders: [
        { name: '王二', position: '党委书记', contact: '13000130001' },
        { name: '陈三', position: '镇长', contact: '12900129001' }
      ]
    },
    {
      id: 6,
      name: '仙都镇',
      villageCount: 3,
      population: 24693,
      leaders: [
        { name: '李想', position: '党委书记', contact: '12800128001' },
        { name: '刘芳', position: '镇长', contact: '12700127001' }
      ]
    }
  ];

  // 打开领导班子详情弹窗
  const openLeadersModal = (town: TownData) => {
    setSelectedTown(town);
    setModalVisible(true);
  };

  return (
    <Block title={'各级组织基本情况'} className="bg-[#0F1C3F] text-white h-full w-full p-2 overflow-hidden">
      {/* 表格容器 */}
      <div className="overflow-x-auto w-full h-full">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#152950]">
              <th className="border border-[#1E3A6F] p-2 text-left font-medium text-[#42DEFF]">乡镇名称</th>
              <th className="border border-[#1E3A6F] p-2 text-left font-medium text-[#42DEFF]">行政村/社区数量</th>
              <th className="border border-[#1E3A6F] p-2 text-left font-medium text-[#42DEFF]">辖区人口</th>
              <th className="border border-[#1E3A6F] p-2 text-left font-medium text-[#42DEFF]">领导班子</th>
            </tr>
          </thead>
          <tbody>
            {townData.map((town) => (
              <tr key={town.id} className="hover:bg-[#152950]/50 transition-colors">
                <td className="border border-[#1E3A6F] p-2 font-medium">{town.name}</td>
                <td className="border border-[#1E3A6F] p-2 text-[#36CFC9]">{town.villageCount}个</td>
                <td className="border border-[#1E3A6F] p-2 text-[#36CFC9]">{town.population.toLocaleString()}人</td>
                <td className="border border-[#1E3A6F] p-2">
                  <button
                    onClick={() => openLeadersModal(town)}
                    className="px-3 py-1 bg-[#0073D6] text-white rounded hover:bg-[#005DA6] transition-colors"
                  >
                    点击查看
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 领导班子详情弹窗 */}
      {modalVisible && selectedTown && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0F1C3F] rounded-lg w-full max-w-md border border-[#0073D6]">
            <div className="bg-gradient-to-r to-[#002C93] from-[#0073D6] p-3 rounded-t-lg flex justify-between items-center">
              <h3 className="text-white font-medium">{selectedTown.name}领导班子</h3>
              <button
                onClick={() => setModalVisible(false)}
                className="text-white hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {selectedTown.leaders.map((leader, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-[#1E3A6F] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">{leader.name}</h4>
                    <span className="text-[#42DEFF] text-sm">{leader.position}</span>
                  </div>
                  <div className="text-[#86909C] text-sm">联系方式: {leader.contact}</div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-[#152950] rounded-b-lg flex justify-end">
              <button
                onClick={() => setModalVisible(false)}
                className="px-4 py-2 bg-[#0073D6] text-white rounded hover:bg-[#005DA6] transition-colors" >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </Block>
  );
}