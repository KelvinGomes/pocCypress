class Random {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /api-manager/#/apis/list)
     */

    get getName() {
        return `Teste - ${Math.floor(Math.random() * 1000)}`;
    }

}

module.exports = new Random;