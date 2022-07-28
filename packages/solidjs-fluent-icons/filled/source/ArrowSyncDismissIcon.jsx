import { splitProps } from "solid-js";
function ArrowSyncDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.41 3.64a.5.5 0 000-.71L9.3.8a.5.5 0 00-.7.7l1 1a7.5 7.5 0 00-4.08 13.5.5.5 0 00.6-.8 6.5 6.5 0 015.28-11.55l.02-.02zM8.6 16.36l.02-.02a6.48 6.48 0 005.99-1.74 6.5 6.5 0 00-.7-9.8.5.5 0 11.6-.8 7.5 7.5 0 01-4.07 13.5l.98.98a.5.5 0 11-.7.71l-2.12-2.12a.5.5 0 010-.7zM15 10a5 5 0 11-10 0 5 5 0 0110 0zm-3.15-1.15a.5.5 0 00-.7-.7L10 9.29 8.85 8.15a.5.5 0 00-.7.7L9.29 10l-1.14 1.15a.5.5 0 10.7.7L10 10.71l1.15 1.14a.5.5 0 00.7-.7L10.71 10l1.14-1.15z"/>
    </svg>);
}
export default ArrowSyncDismissIcon;
