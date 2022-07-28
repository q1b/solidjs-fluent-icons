import { splitProps } from "solid-js";
function BorderTopBottomThickIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.12 5.52A1 1 0 016 5h8a1 1 0 01.88.52 1 1 0 001.84-.33 1 1 0 00-.22-.83A3 3 0 0014 3H6a3 3 0 00-2.5 1.35 1 1 0 101.62 1.17zm0 8.96A1 1 0 006 15h8a1 1 0 00.88-.52 1 1 0 011.84.33 1 1 0 01-.22.83A3 3 0 0114 17H6a3 3 0 01-2.5-1.35 1 1 0 111.62-1.17zM4 12a1 1 0 01-1-1V9a1 1 0 112 0v2a1 1 0 01-1 1zm11-1a1 1 0 002 0V9a1 1 0 10-2 0v2z"/>
    </svg>);
}
export default BorderTopBottomThickIcon;
