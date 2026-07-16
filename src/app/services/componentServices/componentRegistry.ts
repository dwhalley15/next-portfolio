import SmallHeader  from "../../components/SmallHeader/SmallHeader";
import  Timeline  from "../../components/Timeline/TimelIne";
import  Header  from "../../components/Header/Header";
import  WorkList  from "../../components/WorkList/WorkList";
import  StackList  from "../../components/StackList/StackList";
import  Cta  from "../../components/Cta/Cta";
import  Navbar  from "../../components/Navigation/Navigation";
import  Footer  from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import List from "../../components/List/List";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import DynamicWorkList from "../../components/DynamicWorkList/DynamicWorkList";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
import Links from "../../components/Links/Links";
import Text from "../../components/Text/Text";
import NumberList from "../../components/NumberList/NumberList";
import Media from "../../components/Media/Media";
import ArrowList from "../../components/ArrowList/ArrowList";

export const componentRegistry = {
    small_header_content: SmallHeader,
    timeline_content: Timeline,
    large_header_content: Header,
    work_list_content: WorkList,
    stack_list_content: StackList,
    cta_content: Cta,
    navigation_content: Navbar,
    footer_content: Footer,
    services_content: Services,
    skills_content: Skills,
    education_content: Education,
    list_content: List,
    contact_form_content: ContactForm,
    contact_details_content: ContactDetails,
    dynamic_work_list_content: DynamicWorkList,
    work_header_content: WorkHeader,
    links_content: Links,
    text_content: Text,
    number_list_content: NumberList,
    media_content: Media,
    arrow_list_content: ArrowList,
} as const;