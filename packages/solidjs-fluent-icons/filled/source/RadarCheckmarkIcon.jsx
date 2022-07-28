import { splitProps } from "solid-js";
function RadarCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.28 3.24l-1.09 1.1a6.5 6.5 0 00-9.66 5.02 5.5 5.5 0 00-1.53.9 8 8 0 0112.28-7.01zM9.75 18c.37-.46.67-.97.89-1.53a6.47 6.47 0 003.96-1.87.75.75 0 011.06 1.06A7.98 7.98 0 019.75 18zM11 14.5c0 .17 0 .34-.02.5a5.08 5.08 0 002.63-1.4.75.75 0 10-1.06-1.05c-.47.47-1.04.78-1.64.93.06.33.09.67.09 1.02zM5.5 9c.35 0 .69.03 1.02.1a3.58 3.58 0 014.47-2.56l1.16-1.17A5.1 5.1 0 005 9.02L5.5 9zm3 .9c.64.41 1.19.96 1.6 1.6a1.5 1.5 0 001.35-1.89l4.33-4.33a.75.75 0 00-1.06-1.06l-4.33 4.33A1.5 1.5 0 008.5 9.9zm8.75 3.35a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zm1.5 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-4.25 5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 15.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z"/>
    </svg>);
}
export default RadarCheckmarkIcon;
