import { getCollection, getEntry } from 'astro:content';

export async function getSiteSettings() {
  try {
    const settings = await import('../content/settings/site.json');
    return settings.default;
  } catch {
    return {
      siteName: 'LendCity Mortgages',
      tagline: "North America's Investment Property Lender",
      description: 'Access the best mortgage financing for investors.',
      contact: {
        email: 'info@lendcity.ca',
        phone: '+1-519-250-4848',
        address: '4769 Wyandotte St E',
        city: 'Windsor',
        province: 'Ontario',
        postalCode: 'N8W 5M8',
      },
    };
  }
}

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => {
    return data.status === 'published';
  });
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getPublishedPosts();
  return posts.filter(post => post.data.featured).slice(0, limit);
}

export async function getPostsByCategory(category: string) {
  const posts = await getPublishedPosts();
  return posts.filter(post => post.data.category === category);
}

export async function getPostsByTag(tag: string) {
  const posts = await getPublishedPosts();
  return posts.filter(post => post.data.tags?.includes(tag));
}

export async function getAllTags() {
  const posts = await getPublishedPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    post.data.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export async function getTeamMembers() {
  const team = await getCollection('team');
  return team.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export async function getFeaturedTeamMembers() {
  const team = await getTeamMembers();
  return team.filter(member => member.data.featured);
}

export async function getServices() {
  const services = await getCollection('services');
  return services.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export async function getUpcomingEvents() {
  const events = await getCollection('events');
  const now = new Date();
  return events
    .filter(event => event.data.startDate > now)
    .sort((a, b) => a.data.startDate.valueOf() - b.data.startDate.valueOf());
}

export async function getFAQs(category?: string) {
  const faqs = await getCollection('faqs');
  const filtered = category
    ? faqs.filter(faq => faq.data.category === category)
    : faqs;
  return filtered.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export async function getLocations(country?: string) {
  const locations = await getCollection('locations');
  const filtered = country
    ? locations.filter(loc => loc.data.country === country)
    : locations;
  return filtered.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}
