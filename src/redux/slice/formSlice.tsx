import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  totalStep: number;
  step: number;
  ticketType: string;
  ticketNumber: string;
  name: string;
  request?: string;
  email: string;
  image: string | null;
}

// Load state from localStorage
const loadState = (): FormState => {
  const savedState = localStorage.getItem("formData");
  return savedState
    ? JSON.parse(savedState)
    : {
        step: 1,
        ticketType: "",
        ticketNumber: "",
        name: "",
        request: "",
        image: null,
        email: "",
        totalStep: 3
      };
};

const initialState: FormState = loadState();

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.step < state.totalStep) {
        state.step += 1;
        localStorage.setItem("formData", JSON.stringify(state));
      }
    },
    decrementStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
        localStorage.setItem("formData", JSON.stringify(state));
      }
    },

    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      Object.assign(state, action.payload);
      localStorage.setItem("formData", JSON.stringify(state));
    },
    resetForm: () => {
      localStorage.removeItem("formData");
      localStorage.removeItem("formStepTwo");
      localStorage.removeItem("formStep1");
      return {
        step: 1,
        ticketType: "",
        ticketNumber: "",
        name: "",
        request: "",
        email: "",
        image: null,
        totalStep: 3
      };
    }
  }
});

export const { incrementStep, decrementStep, updateForm, resetForm } =
  formSlice.actions;
