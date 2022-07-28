import { splitProps } from "solid-js";
function PeopleSyncIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 00-1-.26H3.5a2 2 0 00-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 019 14.5zm1 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z"/>
    </svg>);
}
export default PeopleSyncIcon;
