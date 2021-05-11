import { useCallback, useEffect, useMemo, useRef } from "react";

import { useLanguageState } from "@hesaba/theme-language";
import { useResizer } from "./useResizer";
import { useTableSizeAction } from "../container/TableSizeProvider";

export const useTableResizer = () => {
  const { direction } = useLanguageState();

  const dirRef = useRef(direction);
  const { setSizes } = useTableSizeAction();

  const ref = useRef<HTMLDivElement | undefined>();

  const onMouseUpCB = useCallback((totalWidth, currentWidths) => {
    // setSizes({
    //   totalWidth,
    //   currentWidths,
    // });
  }, []);
  const onMouseMoveCB = useCallback((totalWidth, currentWidths) => {
    // setSizes({
    //   totalWidth: totalWidth.current,
    //   currentWidths: currentWidths.current,
    // });
  }, []);
  const { onMouseDown } = useResizer(ref, onMouseMoveCB, onMouseUpCB, 0);

  const [setRef, removeMouseDownListerner] = useMemo(() => {
    // const onMouseMove = (e: MouseEvent) => {
    //   if (
    //     !columnElements.current ||
    //     columnElements.current.length === 0 ||
    //     !headers.current ||
    //     headers.current.length === 0 ||
    //     !ref ||
    //     !rowRef.current
    //   )
    //     return;

    //   let newWidth = MIN_TABLE_WIDTH;
    //   if (dirRef.current === "rtl") {
    //     const right = columnElements.current[0].getBoundingClientRect().right;
    //     newWidth = Math.max(-e.clientX + right, MIN_TABLE_WIDTH);
    //   } else {
    //     const left = columnElements.current[0].getBoundingClientRect().left;
    //     newWidth = Math.max(e.clientX - left, MIN_TABLE_WIDTH);
    //   }

    //   let headerWidth = 0;
    //   headers.current.forEach(
    //     (el) =>
    //       (headerWidth +=
    //         el.getBoundingClientRect().width + RESIZE_HANDLE_WIDTH)
    //   );

    //   totalWidth.current = headerWidth;

    //   columnElements.current.forEach((el, index) => {
    //     if (index === 0) {
    //       el.style.width = `${newWidth}px`;
    //       el.style.minWidth = `${newWidth}px`;
    //       el.style.maxWidth = `${newWidth}px`;
    //     } else {
    //       el.style.width = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //       el.style.minWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //       el.style.maxWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //     }
    //   });
    //   // rowRef.current.forEach((el) => {
    //   //   el.style.width = `${headerWidth}px`;
    //   //   el.style.minWidth = `${headerWidth}px`;
    //   //   el.style.maxWidth = `${headerWidth}px`;
    //   // });
    // };

    // const onMouseUp = (e: MouseEvent) => {
    //   window.removeEventListener("mousemove", onMouseMove);
    //   window.removeEventListener("mouseup", onMouseUp);
    //   if (
    //     !currentField.current ||
    //     !columnElements.current ||
    //     columnElements.current.length === 0
    //   )
    //     return;

    //   if (dirRef.current === "rtl") {
    //     currentWidths.current[currentField.current] =
    //       -e.clientX + columnElements.current[0].getBoundingClientRect().right;
    //   } else {
    //     currentWidths.current[currentField.current] =
    //       e.clientX - columnElements.current[0].getBoundingClientRect().left;
    //   }

    //   setSizes({
    //     totalWidth: totalWidth.current,
    //     currentWidths: currentWidths.current,
    //   });
    // };

    const removeMouseDown = (table: HTMLDivElement) => {
      table.removeEventListener("mousedown", onMouseDown);
    };
    const addMouseDownListerner = (table: HTMLDivElement) => {
      table.addEventListener("mousedown", onMouseDown);
    };

    const setTableRef = (nodeRef: any) => {
      if (nodeRef) {
        ref.current = nodeRef;
        addMouseDownListerner(nodeRef as HTMLDivElement);
      }
    };

    return [setTableRef, removeMouseDown];
  }, []);

  useEffect(() => {
    return () => {
      ref.current && removeMouseDownListerner(ref.current);
    };
  }, [removeMouseDownListerner]);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  return { setRef, ref: ref.current };
};
