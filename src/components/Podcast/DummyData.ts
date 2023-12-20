export const dummyData = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        title: `Item ${i}`,
        date: 100,
        duration: 1,
      });
    }
    return items;
   }
