import { splitProps } from "solid-js";
function SelectObjectSkewEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-13 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm4-11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm3.89.75h4.22a2.5 2.5 0 010-1.5H9.9a2.5 2.5 0 010 1.5zM3.6 13L5.98 6.5c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5zm2.28 3.25H9.4l.02-.1c.12-.46.34-.9.65-1.26 0-.05.02-.1.03-.14H5.9a2.5 2.5 0 010 1.5zM16.39 7l-.92 2.53-.37.31-2.1 2.1 1.98-5.45c.4.3.88.48 1.41.5zm-5.41 8.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
    </svg>);
}
export default SelectObjectSkewEditIcon;
