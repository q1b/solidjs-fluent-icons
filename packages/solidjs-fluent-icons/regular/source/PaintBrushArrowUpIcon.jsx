import { splitProps } from "solid-js";
function PaintBrushArrowUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 4v3.5a.5.5 0 01-.5.5H7a1 1 0 00-1 1v1h8V9a1 1 0 00-1-1h-1.5a.5.5 0 01-.5-.5V4a1 1 0 10-2 0zm6 5v1.47a.57.57 0 010 .06v1.56a1.5 1.5 0 00-1 0V11H6v.5A13.57 13.57 0 014.8 17h1.37l.02-.04a16.46 16.46 0 00.66-1.7A3 3 0 007 14.5a.5.5 0 011 0c0 .32-.08.69-.18 1.03A10.96 10.96 0 017.28 17h1.24l.18-.42c.17-.4.3-.83.3-1.08a.5.5 0 011 0c0 .47-.2 1.05-.37 1.46L9.6 17H13v1H8.84 6.51 4a.5.5 0 01-.43-.76l.01-.02a3.9 3.9 0 00.2-.38A12.57 12.57 0 005 11.5V9c0-1.1.9-2 2-2h1V4a2 2 0 014 0v3h1a2 2 0 012 2zm0 5.7v3.8a.5.5 0 01-1 0v-3.8l-1.15 1.15a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L15 14.71z"/>
    </svg>);
}
export default PaintBrushArrowUpIcon;
