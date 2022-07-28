import { splitProps } from "solid-js";
function BorderRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.75 12a.75.75 0 01-.75-.75v-2.5a.75.75 0 011.5 0v2.5c0 .41-.34.75-.75.75zM17 8.73V6a3 3 0 00-1.96-2.81.75.75 0 10-.58 1.38l.07.03c.57.21.97.76.97 1.4v8a1.5 1.5 0 01-1.04 1.43.75.75 0 00.58 1.38A3 3 0 0017 14v-2.73-2.52-.02zM5.45 15.4a1.5 1.5 0 01-.88-.94.75.75 0 00-1.38.58 3 3 0 001.77 1.77.75.75 0 10.49-1.41zM4.6 5.45a1.5 1.5 0 01.94-.88.75.75 0 00-.58-1.38 3 3 0 00-1.77 1.77.75.75 0 101.41.5zM11.25 17a.75.75 0 000-1.5h-2.5a.75.75 0 000 1.5h2.5zM12 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.34.75.75z"/>
    </svg>);
}
export default BorderRightIcon;
