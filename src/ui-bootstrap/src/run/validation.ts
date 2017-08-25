import { FormlyConfig, FormlyFieldConfig } from '../../../core';

export class TemplateValidation {
	run(fc: FormlyConfig) {
		fc.templateManipulators.postWrapper.push((field: FormlyFieldConfig) => {
			if (field && field.validators) {
				return 'validation-message';
			}
		});
	}
}
