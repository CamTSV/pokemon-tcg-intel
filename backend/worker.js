const scrapers = require('./scrapers/allScrapers');
const monitor = require('./core/monitor');
const alert = require('./alerts/discord');

async function runScrapers() {
  for (const scraper of scrapers) {
    try {
      const products = await scraper();
      console.log('Scraped:', products.length, 'products from', scraper.name);
    } catch (err) {
      console.error('Error running scraper', scraper.name, err);
      alert(`Scraper ${scraper.name} failed`);
    }
  }
  monitor();
}

runScrapers();