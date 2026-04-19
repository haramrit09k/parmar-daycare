const menuItems = [
  {
    emoji: '🥗',
    name: 'Rainbow Grain Bowl',
    description: 'Millet, roasted beet, shaved carrot, cucumber coins, tahini drizzle.',
    tag: 'Lunch',
    color: '#C17B5B',
  },
  {
    emoji: '🫙',
    name: 'Deconstructed Hummus Plate',
    description: 'Whole chickpeas, soft flatbread, cucumber, cherry tomato, olive oil.',
    tag: 'Snack',
    color: '#7B9E87',
  },
  {
    emoji: '🥚',
    name: 'Fresh Herb Frittata',
    description: 'Pasture eggs, oasis herbs (rosemary, chive), soft ricotta, sweet potato.',
    tag: 'Breakfast',
    color: '#F5A623',
  },
  {
    emoji: '🍓',
    name: 'Forest Fruit Skewers',
    description: 'Seasonal berries, melon, kiwi — served with coconut yogurt dip.',
    tag: 'Snack',
    color: '#8B5E7A',
  },
  {
    emoji: '🥦',
    name: 'Garden Steamer Plate',
    description: 'Lightly steamed broccoli, snap peas, edamame, brown rice, sesame.',
    tag: 'Lunch',
    color: '#2D6A4F',
  },
  {
    emoji: '🍞',
    name: 'Seed & Honey Toast',
    description: 'Whole grain sourdough, sunflower butter, raw honey, banana slices.',
    tag: 'Breakfast',
    color: '#9A5E41',
  },
];

const tagColors: Record<string, string> = {
  Breakfast: '#F5A623',
  Lunch: '#00B4A6',
  Snack: '#7B9E87',
};

export default function HarvestBoard() {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-terracotta mb-4">
            The Menu
          </p>
          <h2
            className="font-display text-forest-dark leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            The Harvest Board
          </h2>
          <p className="mt-4 font-sans text-slate-cool max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
            Real, deconstructed whole foods. Every item on our menu can be held, examined, and named
            by a curious three-year-old — because understanding food begins with touching it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group p-6 rounded-2xl bg-white border border-cream-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}18` }}
              >
                {item.emoji}
              </div>

              <div className="flex items-start justify-between mb-2 gap-2">
                <h3 className="font-display text-xl text-forest-dark">{item.name}</h3>
                <span
                  className="flex-shrink-0 text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: `${tagColors[item.tag]}20`, color: tagColors[item.tag] }}
                >
                  {item.tag}
                </span>
              </div>

              <p className="font-sans text-sm text-slate-cool leading-relaxed">{item.description}</p>

              <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: item.color }} />
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-sans text-sm text-slate-cool/60 italic">
          Menus rotate seasonally. All foods are nut-aware and allergen-labelled. Organic where available.
        </p>
      </div>
    </section>
  );
}
