import { LightningElement } from 'lwc';
import SVG_URL from '@salesforce/resourceUrl/test';

export default class Hello extends LightningElement {
    get svgURL() {
        return `${SVG_URL}#xss`;
    }
}
