import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['tab', 'container']

  updateSelectedTab(event) {
    this.tabTargets.forEach((tab) => tab.classList.remove('is-active'))
    this.containerTargets.forEach((tab) => tab.classList.add('is-hidden'))
    const currentTab = this.tabTargets.filter((tab) => tab.contains(event.target))[0];
    const targetContainer =  document.getElementById(currentTab.dataset.targetId);
    targetContainer.classList.remove('is-hidden');
    currentTab.classList.add('is-active');
  }
}
