import { element, by, ElementFinder } from 'protractor';

export class UtilisateurComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-utilisateur div table .btn-danger'));
  title = element.all(by.css('jhi-utilisateur div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class UtilisateurUpdatePage {
  pageTitle = element(by.id('jhi-utilisateur-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  nomInput = element(by.id('field_nom'));
  prenomInput = element(by.id('field_prenom'));
  datenaissanceInput = element(by.id('field_datenaissance'));
  codeInput = element(by.id('field_code'));
  roleInput = element(by.id('field_role'));
  pseudoInput = element(by.id('field_pseudo'));
  motdepasseInput = element(by.id('field_motdepasse'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNomInput(nom: string): Promise<void> {
    await this.nomInput.sendKeys(nom);
  }

  async getNomInput(): Promise<string> {
    return await this.nomInput.getAttribute('value');
  }

  async setPrenomInput(prenom: string): Promise<void> {
    await this.prenomInput.sendKeys(prenom);
  }

  async getPrenomInput(): Promise<string> {
    return await this.prenomInput.getAttribute('value');
  }

  async setDatenaissanceInput(datenaissance: string): Promise<void> {
    await this.datenaissanceInput.sendKeys(datenaissance);
  }

  async getDatenaissanceInput(): Promise<string> {
    return await this.datenaissanceInput.getAttribute('value');
  }

  async setCodeInput(code: string): Promise<void> {
    await this.codeInput.sendKeys(code);
  }

  async getCodeInput(): Promise<string> {
    return await this.codeInput.getAttribute('value');
  }

  async setRoleInput(role: string): Promise<void> {
    await this.roleInput.sendKeys(role);
  }

  async getRoleInput(): Promise<string> {
    return await this.roleInput.getAttribute('value');
  }

  async setPseudoInput(pseudo: string): Promise<void> {
    await this.pseudoInput.sendKeys(pseudo);
  }

  async getPseudoInput(): Promise<string> {
    return await this.pseudoInput.getAttribute('value');
  }

  async setMotdepasseInput(motdepasse: string): Promise<void> {
    await this.motdepasseInput.sendKeys(motdepasse);
  }

  async getMotdepasseInput(): Promise<string> {
    return await this.motdepasseInput.getAttribute('value');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class UtilisateurDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-utilisateur-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-utilisateur'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
