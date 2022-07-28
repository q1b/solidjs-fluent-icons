import { splitProps } from "solid-js";
function ArrowSyncCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.41 3.64a.5.5 0 000-.71L9.3.8a.5.5 0 00-.7.7l1 1a7.5 7.5 0 00-4.08 13.5.5.5 0 00.6-.8A6.5 6.5 0 0111.4 3.66l.01-.02zM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01.07A6.5 6.5 0 0013.9 4.8a.5.5 0 11.6-.8 7.5 7.5 0 01-4.07 13.5l1 .98a.5.5 0 11-.71.71l-2.12-2.12a.5.5 0 010-.7zM15 10a5 5 0 11-10 0 5 5 0 0110 0zm-2.65-1.85a.5.5 0 00-.7 0L9 10.79 7.85 9.65a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z"/>
    </svg>);
}
export default ArrowSyncCheckmarkIcon;
