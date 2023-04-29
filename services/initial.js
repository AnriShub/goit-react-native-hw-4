import * as Yup from "yup";

export const validationRegistr = Yup.object().shape({
  displayName: Yup.string()
    .label("displayName")
    .required()
    .min(3, "Имя должно содержать минимум 3 символа"),
  email: Yup.string().label("Email").email("Введите правльный Email").required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Пароль должен быть длиннее 6 символов"),
});

export const validationLogin = Yup.object().shape({
  email: Yup.string().label("Email").email("Введите правльный Email").required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Пароль должен быть длиннее 6 символов"),
});

export const initialAuth = {
  userId: null,
  nickName: null,
  email: null,
  photoURL: null,
};

export const initialData = {
  posts: [],
  comments: [],
};

export const initialPrestate = {
  uri: null,
  isLoading: false,
  error: null,
};

export const initialLogin = {
  email: "",
  password: "",
};

export const initialRegistr = {
  displayName: "",
  email: "",
  password: "",
};

export const initialPost = {
  name: "",
  adress: "",
  coordinate: {},
};

export const icons = {
  Posts: "grid",
  CreatePosts: "plus",
  Profile: "user",
};