import { splitProps } from "solid-js";
function TextBulletListDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7 5.75c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 5.75zm0 5c0-.41.34-.75.75-.75h4.59c-.58.4-1.07.91-1.45 1.5H7.75a.75.75 0 01-.75-.75zM7.75 15h2.27c.05.52.17 1.03.35 1.5H7.75a.75.75 0 010-1.5zm-4.5-3a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm0 5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM20 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z"/>
    </svg>);
}
export default TextBulletListDismissIcon;
