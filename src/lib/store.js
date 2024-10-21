import { immer } from "immer";
import { create } from "zustand";

export const useStore = create(
    (set) => ({
        treeData: [
            {
                id: 1,
                name: 'Documents',
                type: 'folder',
                isOpen: false,

                children: [
                    { id: 2, name: 'File1.txt', type: 'file' },
                    { id: 3, name: 'File2.txt', type: 'file' },
                    {
                        id: 4,
                        name: 'subFolder',
                        type: 'folder',
                        isOpen: false,
                        children: [
                            { id: 5, name: 'File5.txt', type: 'file' },
                            { id: 6, name: 'File6.txt', type: 'file' },
                        ]
                    },
                ]
            },
            {
                id: 7,
                name: 'Downloads',
                type: 'folder',
                isOpen: false,
                children: [
                    { id: 8, name: 'File8.txt', type: 'file' },
                    { id: 9, name: 'File9.txt', type: 'file' },
                    { id: 10, name: 'File10.txt', type: 'file' },
                ]

            }
        ],

        isSelected: null,

        toggleFolder: (id) => set((state) => {
            const toggleItem = (item) => {
                return item.map((item) => {
                    if (item.id === id && item.type === 'folder') {
                        return { ...item, isOpen: !item.isOpen };
                    }
                    if (item.children) {
                        return { ...item, children: toggleItem(item.children) };
                    }
                    return item;
                })
            }
            return { treeData: toggleItem(state.treeData) };
        }),

        selectItem: (id) => set({ selectedItem: id }),


    })
)