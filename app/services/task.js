import ItemService from './item';

export default ItemService.extend({
  createItem(id, task, state, params) {
    const item = {
      id,
      task,
      state,
    };
    Object.assign(item, params);
    return item;
  },

  scrollDown() {
    const groupsList = document.querySelector('.task-list-block-scroll');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
});
