import { splitProps } from "solid-js";
function CodeTextEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 4.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5zm3 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 11.25c0-.41.34-.75.75-.75h9.5c.06 0 .12 0 .17.02L12.94 12H4.75a.75.75 0 01-.75-.75zm6.27 3.42l.98-.98a.75.75 0 00-.5-.19h-8a.75.75 0 000 1.5h7.24c.08-.12.18-.23.28-.33zm2.23-6.42c0-.41.34-.75.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM10.75 4.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm.23 10.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
    </svg>);
}
export default CodeTextEditIcon;
