import { instructions } from "./constants";

export const formConfig = [
  {
    type: "information",
    label: "",
    name: "info",
    text: instructions,
    buttonText: "Start",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
  {
    type: "information",
    label: "",
    name: "info",
    text: `At grouzy we develop blockchain-based solutions to help SMEs <strong>reduce time, money and grow</strong>.<br><br>
    In order to offer you the best solution, please help us to know more about you.`,
    buttonText: "Cool, let's do it!",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
  {
    type: "text",
    label: "What's your name?",
    name: "weakness",
    buttonText: "Next question",
    options: {
      attrs: {
        placeholder: "Write here...",
      },
    },
    validation: {
      required: false,
    },
  },
  {
    type: "text",
    label: "And your surname?",
    name: "weakness",
    buttonText: "Next question",
    options: {
      attrs: {
        placeholder: "Write here...",
      },
    },
    validation: {
      required: true,
    },
  },
  {
    type: "text",
    label: "What's the name of your company?",
    name: "weakness",
    buttonText: "Next question",
    options: {
      attrs: {
        placeholder: "Write here...",
      },
    },
    validation: {
      required: false,
    },
  },
  {
    type: "radio",
    label: "Is your company a startup?",
    name: "hasSuperpower",
    buttonText: "Next question",
    options: {
      choices: ["Yes", "No"],
    },
    validation: {
      required: true,
    },
  },
  {
    type: "checkbox",
    label: "How many employees does your company have?",
    name: "superpowers",
    buttonText: "Next question",
    options: {
      choices: [
        "0-10",
        "10-49",
        "50-100",
        "100-300",
        "400-500",
        "More than 500"
      ],
    },
    validation: {
      required: true,
    },
  },
  {
    type: "checkbox",
    label: "How many suppliers does your company have?",
    name: "superpowers",
    buttonText: "Next question",
    options: {
      choices: [
        "5-10",
        "10-20",
        "30-40",
        "More than 40",
      ],
    },
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    type: "textarea",
    label: "Tell us a little bit about your company",
    name: "weakness",
    buttonText: "Next question",
    options: {
      attrs: {
        placeholder: "Write here...",
      },
    },
    validation: {
      required: true,
    },
  },
  {
    type: "radio",
    label: "Have you ever used blockchain in your company?",
    name: "hasSuperpower",
    buttonText: "Next question",
    options: {
      choices: ["Yes", "No"],
    },
    validation: {
      required: true,
    },
  },
 {
    type: "text",
    label: "What's your work email?",
    name: "superheroName",
    buttonText: "Next question",
    options: {
      attrs: {
        placeholder: "Work email",
      },
    },
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    type: "text",
    label: "What's your phone number",
    name: "phone",
    buttonText: "Done! Finish the form",
    options: {
      attrs: {
        placeholder: "Your Contact",
      },
    },
    validation: {
      required: true,
      minLength: 10,
    },
  },
  {
    type: "information",
    label: "",
    name: "info",
    text: `Thanks so much for your info and interest. we will contact you shortly.`,
    buttonText: "Cool, goodbye :)",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
];
