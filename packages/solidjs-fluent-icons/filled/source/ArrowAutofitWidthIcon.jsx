import { splitProps } from "solid-js";
function ArrowAutofitWidthIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.5 15l-.73.71a.75.75 0 101.04 1.08l1.89-1.82a1 1 0 000-1.44l-1.89-1.82a.75.75 0 00-1.04 1.08l.74.71h-2.76a.75.75 0 000 1.5h2.75zM15 3a2 2 0 012 2v4.25a.75.75 0 01-1.5 0V5a.5.5 0 00-.5-.5H5a.5.5 0 00-.5.5v4.25a.75.75 0 01-1.5 0V5c0-1.1.9-2 2-2h10zM5.23 15.71l-.73-.7h2.75a.75.75 0 100-1.5H4.5l.73-.72a.75.75 0 00-1.04-1.08l-1.88 1.82a1 1 0 000 1.44l1.88 1.82a.75.75 0 001.04-1.08z"/>
    </svg>);
}
export default ArrowAutofitWidthIcon;
