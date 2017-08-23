/* =======================================
 * @ 2017 FEZUI 现代响应式的多终端UI交互组件库
 * https://github.com/furic-zhao/fezui
 * ======================================= */

import Affix from './components/affix';
import Alert from './components/alert';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Button from './components/button';
import Card from './components/card';
import Carousel from './components/carousel';
import Cascader from './components/cascader';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Collapse from './components/collapse';
import DatePicker from './components/date-picker';
import Dropdown from './components/dropdown';
import Form from './components/form';
import Icon from './components/icon';
import Input from './components/input';
import InputNumber from './components/input-number';
import LoadingBar from './components/loading-bar';
import Menu from './components/menu';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Page from './components/page';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Slider from './components/slider';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Timeline from './components/timeline';
import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
import Transfer from './components/transfer';
import Tree from './components/tree';
import Upload from './components/upload';
import { Row, Col } from './components/grid';
import { Select, Option, OptionGroup } from './components/select';
import locale from './locale';

import FezLayout from './components/fez-layout';

const fezui = {
    Affix,
    Alert,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    iButton: Button,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    iCircle: Circle,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    iForm: Form,
    FormItem: Form.Item,
    Col,
    iCol: Col,
    Collapse,
    Icon,
    Input,
    iInput: Input,
    InputNumber,
    LoadingBar,
    Menu,
    iMenu: Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    iOption: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    iProgress: Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    iSelect: Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    iSwitch: Switch,
    iTable: Table,
    Table,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    FezLayout
};

const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(fezui).forEach((key) => {
        Vue.component(key, fezui[key]);
    });

    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
};

// 浏览器直接引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(fezui, { install }); // eslint-disable-line no-undef
