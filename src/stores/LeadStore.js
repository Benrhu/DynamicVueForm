import { defineStore } from "pinia";
import axios from "axios";

export const useLeadStore = defineStore({
  id: "lead",
  state: () => ({
    formData: {},
  }),
});
