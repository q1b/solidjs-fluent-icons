import { splitProps } from "solid-js";
function TableResizeRowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 14a3 3 0 01-3 3H6a3 3 0 01-3-3h4.38l.06.06 1.5 1.5a1.5 1.5 0 002.12 0l1.5-1.5.06-.06H17zm0-1h-4a1.5 1.5 0 00-1.5-1.5v-3A1.5 1.5 0 0013 7h4v6zM7.44 8.06A1.5 1.5 0 017 7H3v6h4a1.5 1.5 0 011.5-1.5v-3a1.5 1.5 0 01-1.06-.44zM3 6h4.38l.06-.06 1.5-1.5a1.5 1.5 0 012.12 0l1.5 1.5.06.06H17a3 3 0 00-3-3H6a3 3 0 00-3 3zm8.85 1.35a.5.5 0 01-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 01.7.7l-1.5 1.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7l.65.64V6.71l-.65.64a.5.5 0 11-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7z"/>
    </svg>);
}
export default TableResizeRowIcon;
