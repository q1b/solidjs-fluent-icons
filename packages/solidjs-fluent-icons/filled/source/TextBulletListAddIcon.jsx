import { splitProps } from "solid-js";
function TextBulletListAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7 5.75c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 5.75zM7.75 10a.75.75 0 000 1.5h3.14c.38-.59.87-1.1 1.45-1.5H7.75zm0 5h2.27c.05.52.17 1.03.35 1.5H7.75a.75.75 0 010-1.5zM4.5 10.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM3.25 17a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM20 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H16v-1.5z"/>
    </svg>);
}
export default TextBulletListAddIcon;
