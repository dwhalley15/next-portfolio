import { SmallHeader } from "../importService/importService";
import { Timeline } from "../importService/importService";
import { Header } from "../importService/importService";
import { WorkList } from "../importService/importService";
import { StackList } from "../importService/importService";
import { Cta } from "../importService/importService";
import { Navbar } from "../importService/importService";
import { Footer } from "../importService/importService";

export const componentRegistry = {
    small_header_info: SmallHeader,
    timeline_info: Timeline,
    large_header_info: Header,
    work_list_info: WorkList,
    stack_list_info: StackList,
    cta_info: Cta,
    navigation_info: Navbar,
    footer_info: Footer,
} as const;