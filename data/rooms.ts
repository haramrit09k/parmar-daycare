export interface Room {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string;
  curriculum: string[];
  aiTools: string[];
  hoverBg: string;
  hoverBgLight: string;
  textColor: string;
  accentColor: string;
  audioSrc: string;
  ageGroup: string;
  aiDetail: string;
}

export const rooms: Room[] = [
  {
    name: 'The Woods',
    slug: 'the-woods',
    icon: '🌲',
    tagline: 'Where every leaf is a lesson.',
    description:
      'A canopy-inspired space with living plants, bark textures, and a reading nook tucked beneath a sculpted tree. Children explore the natural world through guided sensory discovery.',
    longDescription: `The Woods is our oldest-soul space — a forest brought indoors. Real mosses, tactile bark panels, and cascading greenery create an atmosphere of calm wonder. Our youngest explorers sort pinecones, press leaves, and listen to the living canopy through our ambient soundscape.

The AI layer here is invisible: embedded engagement sensors track which natural elements children interact with most, quietly informing our educators about each child's developing interests — without ever interrupting the magic of discovery.`,
    curriculum: ['Sensory Development', 'Nature Literacy', 'Early Science', 'Mindfulness & Regulation'],
    aiTools: ['Engagement pattern sensors', 'Adaptive ambient soundscape', 'Daily nature log generation'],
    hoverBg: '#2D4A36',
    hoverBgLight: '#3D6349',
    textColor: '#F7F3EE',
    accentColor: '#A8C4B0',
    audioSrc: '/audio/woods-ambient.mp3',
    ageGroup: 'All ages',
    aiDetail:
      'Floor-level sensors register which natural objects are touched most often. This data shapes the following week\'s nature tray selections — no screens, no notifications.',
  },
  {
    name: 'The Shore',
    slug: 'the-shore',
    icon: '🌊',
    tagline: 'Feel the rhythm of the world.',
    description:
      'Volcanic black sand, flowing water channels, and tidal sound design transport children to the edge of the sea. A space for deep sensory immersion, fine motor play, and early physics.',
    longDescription: `Black volcanic sand cascades through small fingers. Water winds through smooth river-stone channels. The Shore is our most sensory-rich environment — designed to simultaneously engage touch, sound, and proprioception.

The "Magic Window" responds to the tide: our circadian lighting shifts from soft dawn-amber through midday clarity and into dusk-gold across the day, syncing children's rhythms with real light cycles.`,
    curriculum: ['Fine Motor Skills', 'Physics & Flow', 'Sensory Integration', 'Spatial Reasoning'],
    aiTools: ['Circadian lighting system', 'Water-play engagement mapping', 'Sensory profile building'],
    hoverBg: '#2B5F8E',
    hoverBgLight: '#3A7AB5',
    textColor: '#F7F3EE',
    accentColor: '#A8D8EA',
    audioSrc: '/audio/shore-waves.mp3',
    ageGroup: 'Infant – Toddler',
    aiDetail:
      'Light spectrum shifts with the real-world sun position. Sensors map where children linger in the water table, informing how educators adjust flow obstacles and textures each morning.',
  },
  {
    name: 'The Canyon',
    slug: 'the-canyon',
    icon: '🪨',
    tagline: 'Dig deeper. Think harder.',
    description:
      'Earth-red walls, mineral sorting trays, and West Mark wooden furniture ground children in the oldest materials on earth. The Canyon is where science begins to feel like play.',
    longDescription: `Layers of terracotta, ochre, and slate recreate the drama of canyon walls. Children sort minerals, compare fossils, stack and balance stone-like blocks, and pour coloured sand to understand erosion.

The Canyon features our "Reveal the Future" overlay — parents touring the room can toggle between the natural West Mark wooden environment they see, and the invisible AI layer beneath: the projection zones, the texture-recognition trays, and the haptic feedback embedded in the table surfaces.`,
    curriculum: ['Earth Science', 'Mathematical Thinking', 'Cause & Effect', 'Physical Development'],
    aiTools: ['Texture-recognition sorting trays', 'Projection-mapped geology visuals', 'Haptic feedback tables'],
    hoverBg: '#8B4513',
    hoverBgLight: '#C17B5B',
    textColor: '#F7F3EE',
    accentColor: '#D9A087',
    audioSrc: '/audio/canyon-wind.mp3',
    ageGroup: 'Toddler – Pre-K',
    aiDetail:
      'Sorting trays use optical recognition to identify objects placed in them. When a child groups minerals by colour correctly, a subtle projection celebrates the pattern — no screens, just light.',
  },
  {
    name: 'The Arctic',
    slug: 'the-arctic',
    icon: '❄️',
    tagline: 'Cool spaces grow calm minds.',
    description:
      'Ice-blue light, cool mist, mirrored surfaces, and the soft crunch of foam "snow" create a serene sensory contrast. The Arctic is our regulation room — where overstimulated minds find stillness.',
    longDescription: `The Arctic is intentionally quiet. Cool tones, reflective surfaces, and a whisper-low soundscape of wind over ice give children a place to recalibrate. Our educators use this room for co-regulation activities, breathing exercises, and calm exploration.

Embedded biometric awareness (room-level, non-individual) detects elevated noise and movement and can cue educators via a wristband haptic signal — a gentle reminder to guide children toward calmer activities.`,
    curriculum: ['Emotional Regulation', 'Mindfulness', 'Sensory Contrast', 'Social Awareness'],
    aiTools: ['Room-level biometric awareness', 'Educator haptic cue system', 'Adaptive mist + lighting'],
    hoverBg: '#3A6B8A',
    hoverBgLight: '#5B8FAF',
    textColor: '#F7F3EE',
    accentColor: '#A8D8EA',
    audioSrc: '/audio/arctic-wind.mp3',
    ageGroup: 'All ages',
    aiDetail:
      'A room-level (never individual) noise and movement sensor feeds a signal to educator wristbands. No data is recorded — it\'s a live, anonymous cue system to support timely co-regulation.',
  },
  {
    name: 'The Oasis',
    slug: 'the-oasis',
    icon: '🌿',
    tagline: 'Life finds a way. So do they.',
    description:
      'Tropical plants, a child-tended herb garden, trickling water features, and golden light. The Oasis nurtures responsibility, wonder, and connection to living systems.',
    longDescription: `The Oasis holds life in abundance — and children tend it. Each child has a small plant to care for, watered on a schedule they begin to learn and own. The herb garden provides real ingredients used in The Harvest Board menu.

The "Home-Link" feature lives here: parents who upload a photo of a plant or bug found at home to our app will see the Oasis "Magic Window" greet their child with facts and stories about that specific find the next morning.`,
    curriculum: ['Life Science', 'Responsibility & Care', 'Nutrition Literacy', 'Empathy'],
    aiTools: ['Plant health monitoring', 'Home-Link image recognition', 'Magic Window personalisation'],
    hoverBg: '#2D6A4F',
    hoverBgLight: '#40916C',
    textColor: '#F7F3EE',
    accentColor: '#95D5B2',
    audioSrc: '/audio/oasis-water.mp3',
    ageGroup: 'Toddler – Pre-K',
    aiDetail:
      'Parents photograph a backyard find. Our vision model identifies it. The next morning, a gentle animation on the Oasis window shows that exact plant or creature — creating a bridge between home and school.',
  },
  {
    name: 'The Valley',
    slug: 'the-valley',
    icon: '🏔️',
    tagline: 'Big bodies need big spaces.',
    description:
      'Rolling soft hills, tunnels, climbing forms, and open floor space give children the large-motor challenge their bodies crave — indoors. The Valley is movement made purposeful.',
    longDescription: `The Valley is our most physically active indoor room. Fabric hills of varying height, balance beam paths, crawl tunnels, and climbing forms turn gross motor development into genuine adventure.

Movement in The Valley is tracked at the room level: our educators receive weekly reports on which physical challenges are most popular, allowing them to rotate and elevate the difficulty of obstacles as children grow stronger and more confident.`,
    curriculum: ['Gross Motor Development', 'Spatial Awareness', 'Coordination', 'Risk-Calibrated Play'],
    aiTools: ['Movement pattern tracking (room-level)', 'Obstacle difficulty recommendations', 'Physical milestone mapping'],
    hoverBg: '#5C7A4E',
    hoverBgLight: '#7A9E6E',
    textColor: '#F7F3EE',
    accentColor: '#B5D5A0',
    audioSrc: '/audio/valley-breeze.mp3',
    ageGroup: 'Infant – Pre-K',
    aiDetail:
      'A depth-camera system (no video, no faces) measures aggregate body movement intensity across the room. Educators receive weekly summaries to guide obstacle rotation and difficulty progression.',
  },
  {
    name: 'The Meadow',
    slug: 'the-meadow',
    icon: '🌸',
    tagline: 'Creativity blooms when hands get busy.',
    description:
      'Wildflower murals, art stations flooded with natural pigments, weaving looms, and a light table for shadow play. The Meadow is our studio for open-ended making.',
    longDescription: `The Meadow smells faintly of beeswax and lavender. Art here is process, not product. Children paint with berry pigments, press flowers into beeswax canvases, weave yarn through natural branch frames, and cast shadows on the light table.

The Meadow's AI contribution is curation: an image recognition model analyses the studio's collective artwork across the week and generates a "Studio Notes" entry in every parent's Daily Log — noting recurring themes, favourite materials, and growth in mark-making complexity.`,
    curriculum: ['Creative Expression', 'Fine Motor Refinement', 'Aesthetic Development', 'Storytelling'],
    aiTools: ['Artwork analysis & curation', 'Process-based Studio Notes generation', 'Material preference tracking'],
    hoverBg: '#8B5E7A',
    hoverBgLight: '#C4A0B0',
    textColor: '#F7F3EE',
    accentColor: '#E8C5D8',
    audioSrc: '/audio/meadow-bees.mp3',
    ageGroup: 'Toddler – Pre-K',
    aiDetail:
      'Photos of the day\'s art are processed by an image model that identifies recurring colours, shapes, and themes in a child\'s work — feeding thoughtful, specific notes into the daily parent update.',
  },
  {
    name: 'The Jungle',
    slug: 'the-jungle',
    icon: '🦋',
    tagline: 'Wild curiosity welcomed here.',
    description:
      'Lush canopy, animal discoveries, creature sounds, and a discovery table of tropical specimens. The Jungle is our highest-energy nature room — loud, vibrant, and full of life.',
    longDescription: `The Jungle pulses with colour. Overhead fabric canopy in deep greens and vivid oranges, creature calls in the soundscape, and a rotating discovery table of shells, feathers, insect specimens, and animal replicas.

Our Jungle has one of our most loved AI tools: the "Species Identifier." Children hold a specimen up to a camera panel, and the room quietly speaks its name and one surprising fact — in the child's preferred language.`,
    curriculum: ['Biology & Ecology', 'Language & Vocabulary', 'Wonder & Inquiry', 'Cultural Diversity'],
    aiTools: ['Species Identifier camera panel', 'Multilingual narration', 'Discovery table rotation AI'],
    hoverBg: '#1E5E3E',
    hoverBgLight: '#28825A',
    textColor: '#F7F3EE',
    accentColor: '#95D5B2',
    audioSrc: '/audio/jungle-rain.mp3',
    ageGroup: 'Toddler – Pre-K',
    aiDetail:
      'A camera panel uses a vision model to identify natural objects. When a child holds up a feather or shell, the room narrates a single fascinating fact in the child\'s home language — no screen required.',
  },
  {
    name: 'The Galaxy',
    slug: 'the-galaxy',
    icon: '✨',
    tagline: 'Imagine the impossible. Then wonder why not.',
    description:
      'A star-mapped ceiling, ambient cosmic hum, light-projection constellations, and the deepest question cards in the building. The Galaxy is where STEM becomes philosophy.',
    longDescription: `The Galaxy is our most awe-inspiring space. The ceiling is mapped with 400 accurate constellations that shift with the real night sky. Projection constellations draw and un-draw on the floor. And a rotating set of "Deep Question" cards prompts children to discuss: Why is the sky dark at night? What is a very far away?

This room is intentionally low-AI: the wonder itself is the curriculum. The only AI element is a spoken-word model that can answer children's astronomy questions with age-appropriate accuracy — the voice of a curious, careful scientist.`,
    curriculum: ['Early STEM', 'Philosophical Thinking', 'Language & Storytelling', 'Awe & Wonder'],
    aiTools: ['Real-time star map projection', 'Spoken astronomy Q&A', 'Constellation tracing interactions'],
    hoverBg: '#1A1A3E',
    hoverBgLight: '#2D2D6B',
    textColor: '#A8CCFF',
    accentColor: '#A8CCFF',
    audioSrc: '/audio/galaxy-cosmic.mp3',
    ageGroup: 'Pre-K',
    aiDetail:
      'A voice model trained on age-appropriate astronomy facts listens for questions and responds simply. It says "I don\'t know" when it doesn\'t know — modelling intellectual honesty for children.',
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
