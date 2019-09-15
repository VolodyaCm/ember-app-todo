import ItemService from './item';
import Ember from 'ember';

export default ItemService.extend({
  scrollDown() {
    const groupsList = document.querySelector('.groups-list-block');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
});
