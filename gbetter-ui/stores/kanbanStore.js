import { defineStore } from "pinia";

export const useKanbanStore = defineStore({
  id: "kanban-store",
  state: () => {
    return {
      cardId: "",
    };
  },
  actions: {
    setCardId(cardId) {
      this.cardId = cardId;
      localStorage.setItem("cardId", cardId);
    },
    getCardId() {
      return this.cardId
        ? this.cardId
        : process.client && JSON.parse(localStorage.getItem("cardId"));
    },
    handleDragStart(cardId) {
      this.setCardId(cardId);
    },

    handleDragOver(event) {
      event.preventDefault();
    },
    handleDragLeave(event) {},
    handleDragEnd() {
      console.log("cardId", this.cardId);
      return this.cardId;
    },
  },
});
