import { splitProps } from "solid-js";
function EditOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 00.7-.71l-15-15zm8.2 9.6l-3.99 3.98c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l3.99-4 2.8 2.79zm4-4l-2.6 2.59.71.7 3.97-3.96a2.97 2.97 0 00-4.21-4.2L8.96 6.83l.7.7 2.59-2.58 2.8 2.8zm-1.42-4.17a1.97 1.97 0 012.79 2.8l-.67.66-2.8-2.79.68-.67z"/>
    </svg>);
}
export default EditOffIcon;
