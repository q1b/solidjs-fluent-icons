import { splitProps } from "solid-js";
function PuzzleCubePieceIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.8 1.29a1 1 0 011.4 0l1.51 1.5a1 1 0 010 1.42l-1.5 1.5a1 1 0 01-1.42 0l-1.5-1.5a1 1 0 010-1.42l1.5-1.5zM5.5 17H7v-4H3v1.5A2.5 2.5 0 005.5 17zM7 8v4H3V8h4zm5 4H8V8h4v4zm-4 1h4v4H8v-4zm5-5v4h4V8h-4zm0 5h4v1.5a2.5 2.5 0 01-2.5 2.5H13v-4zM3 7h4V3H5.5A2.5 2.5 0 003 5.5V7zm5 0V3h4v4H8z"/>
    </svg>);
}
export default PuzzleCubePieceIcon;
