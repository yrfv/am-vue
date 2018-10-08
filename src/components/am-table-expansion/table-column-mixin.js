import {oneOf} from '../../scripts/utils';
import {findComponentUpward} from '../../scripts/dom';

const tableColumnMixin = {
    props: {
        title: {type: String, desc: '列标题，当没有titleRenderFunc以及没有$scopedSlots.title时，显示该文本', default: '#'},
        width: {default: '32px', desc: '列宽度'},
        order: {default: 999, desc: '列排序'},
        titleRenderFunc: {type: Function, desc: '自定义列标题渲染函数'},
        colRenderFunc: {type: Function, desc: '自定义列内容渲染函数'},
        fixed: {
            type: String, default: 'center', validator(val) {
                return oneOf(val, ['left', 'right', 'center']);
            },
        },
    },
    watch: {
        order(newval, oldval) {
            if (newval !== oldval) {
                const controller = findComponentUpward(this, 'am-table-column-controller');
                controller.collectHeadColumns();
            }
        },
        width(val) {
            if (this.currentWidth !== val) this.currentWidth = val;
        },
        currentWidth(val) {
            this.$emit('update:width', val);
        },
    },
    data() {
        return {
            isTableColumn: true,
            currentWidth: this.width,
            currentFixed: this.fixed,
        };
    },
    computed: {
        column() {
            return this.$refs.column.column;
        }
    },
};

export default tableColumnMixin;
