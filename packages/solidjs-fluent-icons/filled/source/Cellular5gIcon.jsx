import { splitProps } from "solid-js";
function Cellular5gIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 002.5 0h-1a.5.5 0 010-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 01-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 11-.89.46.86.86 0 00-.48-.42C9.63 3.01 9.51 3 9.5 3zM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.11v-2.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.11v-4.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 01-1.5.11V9.75c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 01-1.5.11V7.75c0-.41.34-.75.75-.75zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 01-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75zm-14-3a.5.5 0 00-.5.44l-.25 2a.5.5 0 00.54.56l.18-.02 1.37-.11c.49-.04.91.35.91.84v.22C5 6.52 4.52 7 3.93 7a.98.98 0 01-.75-.32 1.23 1.23 0 01-.2-.3l-.01-.02a.5.5 0 00-.94.36l.01.02a1.44 1.44 0 00.1.2A1.98 1.98 0 003.93 8C5.07 8 6 7.07 6 5.93V5.7c0-1.08-.92-1.93-2-1.84l-.93.08L3.2 3H5.5a.5.5 0 000-1H2.75z"/>
    </svg>);
}
export default Cellular5gIcon;
