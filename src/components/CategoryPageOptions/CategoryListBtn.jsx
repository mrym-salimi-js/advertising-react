import { useEffect, useMemo, useState } from 'react';
import { BorderRoundedBtn } from '../globals/BorderRoundedBtn';
import { ChevronDown } from '../globals/Icons';
import { List } from '../formFileds/singleSelected/List';
import { useNavigate } from 'react-router-dom';

export function CategoryListBtn({ category }) {
  const [catName, setCatName] = useState();
  const [openList, setOpenList] = useState(false);
  const mainCats = JSON.parse(localStorage.getItem('ads_categories_list'));
  const [listItems, setListItems] = useState();
  const navigateTo = useNavigate();
  const [filterListTitle, setFilterListTitle] = useState();

  useEffect(() => {
    if (mainCats !== undefined) {
      mainCats.map((item) => {
        if (item.slug === category) {
          setCatName(item.name);
        }
        item.children?.map((chItem) => {
          chItem.slug === category && setCatName(chItem.name);
        });
      });
    }

    setFilterListTitle({ name: 'همه گروه ها', slug: '', id: '' });
  }, [openList]);

  useMemo(() => {
    setListItems(mainCats);
  }, [openList]);

  const handleCategoryListDisplay = () => {
    setOpenList(!openList);
  };

  return (
    <>
      <BorderRoundedBtn
        borderColor={'border-[#84105C]'}
        bgColor={'bg-pink-50'}
        textColor={'text-[#84105C]'}
        lable={catName}
        handleAction={handleCategoryListDisplay}
        icon={
          <ChevronDown color={'#84105C'} size={'size-5'} strokeWidth={'2'} />
        }
      />
      {openList && (
        <List
          lable={'دسته بندی'}
          allList={listItems}
          setListItems={setListItems}
          setOpenList={setOpenList}
          navigateTo={navigateTo}
          type={'category_search'}
          setFilterListTitle={setFilterListTitle}
          filterListTitle={filterListTitle}
          firstItemBold={true}
        />
      )}
    </>
  );
}
