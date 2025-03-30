import './assets/main.css'
import './assets/tailwind.css';
import './assets/Scss/style.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'animate.css';

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// Add Free Icons Styles To SVG Core
library.add(fas, far, fab);

// Axios  استيراد
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";


// Prime Vue 
import PrimeVue from "primevue/config";
// Popup
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
// Button
import Button from 'primevue/button';
// Form
import Fluid from 'primevue/fluid';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from 'primevue/checkbox';
import Listbox from 'primevue/listbox';
import DatePicker from 'primevue/datepicker';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import ColorPicker from 'primevue/colorpicker';

// File Upload
import FileUpload from 'primevue/fileupload';
import ToggleButton from 'primevue/togglebutton';
// Menu
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
// Image
import Image from 'primevue/image';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
// Popup
import Popover from 'primevue/popover';
import Dialog from 'primevue/dialog';
import Drawer  from 'primevue/drawer';
// panel
import Fieldset from 'primevue/fieldset';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';

// Card
import Card from 'primevue/card';
// Theme
import Noir from './presets/Noir.js';
import ThemeSwitcher from './components/Theme/ThemeSwitcher.vue';
// Toast
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
// Message
import Message from 'primevue/message';
// PrimeIcons أيقونات 
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
// Quill محرر النصوص الغنية المستندة إلى 
import Editor from 'primevue/editor';
// Table
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row';                   // optional

// 
import Skeleton from 'primevue/skeleton';

import 'primeicons/primeicons.css'
import 'tailwindcss/tailwind.css'


const app = createApp(App)

// eslint-disable-next-line vue/multi-word-component-names
app.component("fa", FontAwesomeIcon);
app.use(createPinia())

app.use(router, axios);

// Prime Vue 
app.use(PrimeVue, {
  theme: {
      preset: Noir,
      options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false,
      }
  }
});
app.use(ConfirmationService);
app.use(DialogService);
// Prime Theme Switcher
app.component('ThemeSwitcher', ThemeSwitcher);
// Prime Button
app.component('prime_button', Button);
// Prime Form
app.component('prime_fluid', Fluid);
app.component('prime_input_text', InputText);
app.component('prime_textarea', Textarea);
app.component('prime_input_password', Password);
app.component('prime_float_label', FloatLabel);
app.component('prime_check_box', Checkbox);
app.component('prime_list_box', Listbox);
app.component('prime_date_picker', DatePicker);
app.component('prime_input_group', InputGroup);
app.component('prime_input_group_addon', InputGroupAddon);
app.component('prime_file_upload', FileUpload);
app.component('prime_toggle_button', ToggleButton);
app.component('prime_color_picker ', ColorPicker);
app.component('PrimeColorPicker ', ColorPicker);
// Prime Menu
app.component('prime_menubar', Menubar);
app.component('prime_tiered_menu', TieredMenu);
app.component('prime_image', Image);
app.component('prime_avatar', Avatar);
app.component('prime_avatar_group', AvatarGroup);
app.component('prime_card', Card);
// Popup 
app.component('prime_popover', Popover);
app.component('prime_dialog', Dialog);
app.component('prime_drawer', Drawer);
// panel
app.component('prime_fieldset', Fieldset);
app.component('prime_stepper', Stepper);
app.component('prime_steplist', StepList);
app.component('prime_steppanels', StepPanels);
app.component('prime_stepitem', StepItem);
app.component('prime_step', Step);
app.component('prime_steppanel', StepPanel);
// Toast
// app.use(Toast);
app.component('prime_toast', Toast);
app.use(ToastService);
// 
app.component('prime_icon_field', IconField);
app.component('prime_input_icon', InputIcon);
// Message
// app.use(Message);
app.component('prime_message', Message);
// Editor
app.component('prime_editor', Editor);
// 
app.component('prime_data_table', DataTable);
app.component('prime_column', Column);
app.component('prime_column_group', ColumnGroup);
app.component('prime_row', Row);
// Skeleton
app.component('prime_skeleton', Skeleton);

app.mount('#app')
