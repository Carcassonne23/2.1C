const app = Vue.createApp({
    data() {
        return {
            selectedCharacter: '',
            characters: [
                {
                    name: 'Aragorn',
                    image: 'aragorn.jpg',
                    bio: 'Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th and last Chieftain of the Dunedain of the North; later crowned King Elessar Telcontar (March 1, 2931 - FO 120), the 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor since the short reign of Isildur. He was a great Ranger and warrior, and as Isildurs heir he bore the shards of Narsil, reforged and renamed Anduril, Flame of the West, in the Great War of the Ring.'
                },
                {
                    name: 'Boromir',
                    image: 'boromir.jpg',
                    bio: 'Boromir was a valiant warrior of Gondor, renowned for his prowess in combat and skill on the battlefield. He was the eldest son of Denethor II, who was Steward of Gondor during the War of the Ring, and his wife Finduilas. Even the people of Rohan admired him, particularly Eomer. He was the older brother of Faramir.'
                },
                {
                    name: 'Frodo',
                    image: 'frodo.jpg',
                    bio: 'Frodo Baggins, son of Drogo Baggins, was a hobbit of the Shire in the late Third Age. He is commonly considered Tolkiens most renowned character for his leading role in the Quest of the Ring, in which he bore the One Ring to Mount Doom, where it was destroyed. He was a Ring-bearer, best friend to his gardener, Samwise Gamgee, and was one of three hobbits who sailed from Middle-earth to the Uttermost West at the end of the Third Age.'
                },
                {
                    name: 'Gandalf',
                    image: 'gandalf.jpg',
                    bio: 'Gandalf, known temporarily as the Grey and later the White, and originally named Olorin (Quenya), was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin II Oakenshield and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.'
                },
                {
                    name: 'Gimli',
                    image: 'gimli.jpg',
                    bio: 'Gimli, son of Gloin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring. Unlike other Dwarves, he readily fought alongside Elves in the War of the Ring against Sauron at the end of the Third Age. After the defeat of Sauron, in the early Fourth Age, he was given the lordship over the Glittering Caves at Helms Deep, which he presided over until he departed from Middle-earth.'
                },
                {
                    name: 'Legolas',
                    image: 'legolas.jpg',
                    bio: 'Legolas was a Sindar Elf who was part of the Fellowship of the Ring in the Third Age. Son of the Elvenking Thranduil of Mirkwood, Legolas was Mirkwoods prince, a messenger, and a master archer. With his keen eyesight, sensitive hearing, and excellent bowmanship, Legolas was valuable to the Fellowship in their journey across Middle-earth. He was well-known for becoming friends with the Dwarf Gimli, despite their long-held differences.'
                },
                {
                    name: 'Merry',
                    image: 'merry.jpg',
                    bio: 'Meriadoc "Merry" Brandybuck was a Hobbit of the Shire and one of Frodo Baggins cousins and closest friends. He loved boats and ponies and had a great interest in the maps of Middle-earth. He was also one of the nine companions of the Fellowship of the Ring, and later became the eighth Master of Buckland.'
                },
                {
                    name: 'Pippin',
                    image: 'pippin.jpg',
                    bio: 'Peregrin Took, more commonly known as Pippin, was a hobbit of the the Shire, and one of Frodo Baggins youngest and closest friends. He was a member of the Fellowship of the Ring and, after the War of the Ring, became thirty-second Thain of the Shire.'
                },
                {
                    name: 'Sam',
                    image: 'sam.jpg',
                    bio: 'Samwise Gamgee, known as Sam, was a hobbit of the Shire. He was Frodo Baggins gardener and best friend. Sam proved himself to be Frodos closest and most dependable companion, the most loyal of the Fellowship of the Ring, and played a critical role in protecting Frodo and destroying the One Ring.'
                },
            ],
            isPictureVisible: false,
        };
    },
    methods: {
        getCharacterImage(characterName) {
            const character = this.characters.find((char) => char.name === characterName);
            if (character) {
                return character.image;
            }
            return '';
        },
        getCharacterBio(characterName) {
            const character = this.characters.find((char) => char.name === characterName);
            if (character) {
                return character.bio;
            }
            return '';
        },
        togglePicture() {
            this.isPictureVisible = !this.isPictureVisible;
        },
    },
});

app.mount('#app');
