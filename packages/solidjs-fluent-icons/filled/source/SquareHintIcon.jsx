import { splitProps } from "solid-js";
function SquareHintIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.25 3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM3 10.75a.75.75 0 001.5 0v-1.5a.75.75 0 00-1.5 0v1.5zm5.5 5.5c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm7-5.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-1.5 0v1.5zm-9.5-7A.75.75 0 005.25 3C4.01 3 3 4 3 5.25a.75.75 0 001.5 0c0-.41.34-.75.75-.75S6 4.16 6 3.75zM5.25 17a.75.75 0 000-1.5.75.75 0 01-.75-.75.75.75 0 00-1.5 0C3 15.99 4 17 5.25 17zM14 3.75c0-.41.34-.75.75-.75C15.99 3 17 4 17 5.25a.75.75 0 01-1.5 0 .75.75 0 00-.75-.75.75.75 0 01-.75-.75zM14.75 17a.75.75 0 010-1.5c.41 0 .75-.34.75-.75a.75.75 0 011.5 0c0 1.24-1 2.25-2.25 2.25z"/>
    </svg>);
}
export default SquareHintIcon;
