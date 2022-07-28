import { splitProps } from "solid-js";
function BorderBottomThickIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 018 3.75zm.71 11.75a.7.7 0 01.04 0h2.5a.7.7 0 01.04 0H14a1.5 1.5 0 001.43-1.03v-.01a.75.75 0 011.38.58A3 3 0 0114 17H6a3 3 0 01-2.81-1.96.75.75 0 111.41-.49c.22.56.77.95 1.4.95h2.71zM4.61 5.45a1.5 1.5 0 01.93-.88.75.75 0 00-.58-1.38 3 3 0 00-1.77 1.77.75.75 0 101.41.49zm9.94-.85a1.5 1.5 0 01.88.94.75.75 0 001.38-.58 3 3 0 00-1.77-1.77.75.75 0 10-.5 1.41zM3 11.25a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5zm13.25.75a.75.75 0 01-.75-.75v-2.5a.75.75 0 011.5 0v2.5c0 .41-.34.75-.75.75z"/>
    </svg>);
}
export default BorderBottomThickIcon;
