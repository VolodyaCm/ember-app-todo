import ItemService from './item';

export default ItemService.extend({
  scrollRight() {
    const subgroupsList = document.querySelector('.scrollmenu');
    subgroupsList.scrollTo({
      left: subgroupsList.scrollWidth,
      behavior: 'smooth'
    })
  }
});
