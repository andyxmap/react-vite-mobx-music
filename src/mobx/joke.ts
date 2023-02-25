import { superInstance } from "@/api/instance"
import { useEnv } from "@/hooks/useEnv"
import { Joke } from "@/models/joke"
import { observable, action } from "mobx"

export class JokeStore {

    @observable jokes: Array<Joke> = []
    @observable fetching: boolean = false

    constructor() {
         this.jokes = [{"id":50816,"joke":"You worry too much about your job. Stop it. You are not paid enough to worry."},{"id":50871,"joke":"Q: How many men does it take to change a toilet paper roll?\n\t\n\tA: No one knows, it's never been done."},{"id":50875,"joke":"He who is without sinJesus saw a crowd chasing down a woman to stone her and approached them. \"What`s going on here, anyway?\" he asked.\"This woman was found committing adultery, and the law says we should stone her!\" one of the crowd responded.\"Wait,\" yelled Jesus. \"Let he who is without sin cast the first stone.\"Suddenly, a stone was thrown from out of the sky, and knocked the woman on the side of her head.\"Aw, c`mon, Dad...\" Jesus cried, \"I`m trying to make a point here!\""},{"id":50904,"joke":"From the Washington Post Style Invitation, in which it was postulated that English should have male and female nouns, and readers were asked to assign a gender to nouns of their choice and explain their reason.The best submissions:SWISS ARMY KNIFE: Male, because even though it appears useful for a wide variety of work, it spends most of its time just opening bottles.KIDNEYS: Female, because they always go to the bathroom in pairs.TIRE: Male, because it goes bald and often is over-inflated.HOT AIR BALLOON: Male, because to get it to go anywhere you have to light a fire under it... and, of course, there`s the hot air part.SPONGES: Female, because they are soft and squeezable and retain water.MAGIC 8 BALL: Male, because it gives monosyllabic answers that usuallyindicate it did not pay attention to your question.WEB PAGE: Female, because it is always getting hit on.SHOE: Male, because it is usually unpolished, with its tongue hanging out.ZIPLOC BAGS: Male, because they hold everything in, but you can always see right through them.SUBWAY: Male, because it uses the same old lines to pick people up.HOURGLASS: Female, because over time, the weight shifts to the bottom.HAMMER: Male, because it hasn`t evolved much over the last 5,000 years, but it`s handy to have around.SUBWAY: Male, because it uses the same old lines to pick up people.REMOTE CONTROL: Female...Ha!...you thought I`d say male. But consider, it gives a man pleasure, he`d be lost without it, and while he doesn`t always know the right buttons to push, he keeps trying.CRITIC: Female, What, this needs to be explained?"},{"id":50948,"joke":"School test\nDuring a maths lesson at school, the teacher\npoints to little Benny and asks, \"Benny, what’s 3 percent?\"\nBenny sits for a while shaking his head\nand then replies, \"You’re right Miss, what’s 3 percent?\""},{"id":50958,"joke":"Finnegan, drunk as usual, staggers into Church, enters the confessional box, sits down but says nothing.\nThe good irish father coughs a few times to get his attention, but Finnegan just sits there. Finally, the irish priest pounds three times on the wall.\nFinnegan yells, \"Ain`t no use knockin, there`s no paper on this side either.\""},{"id":51146,"joke":"A man in a hotel lobby turns to go to the front desk, but he accidentally runs into a woman beside him and his elbow bumps into her breast. They are both quite startled. The man turns to her and says, \"Ma'am, if your heart is soft as your breast, I know you'll forgive me.\" She replies, \"If your penis is as hard as your elbow, I'm in room 436.\""},{"id":52052,"joke":"A man approached a very beautiful woman in a large supermarket and said, \"I've lost my wife here in the supermarket. Can you talk to me for a couple of minutes?\" \"Why do you want to talk to me?\" she asked puzzled. \"Because every time I talk to a beautiful woman, my wife appears out of nowhere.\""},{"id":52457,"joke":"A man buys a lie detector robot that slaps people who lie. He decides to test it at dinner. He asks his son, \"Son, where were you today during school hours?\" \"At school.\" The robot slaps the son. \"Okay, I went to the movies!\" The father asks, \"Which one?\" \"Harry Potter.\" The robot slaps the son again. \"Okay, I was watching porn!\" The father replies, \"What? When I was your age I didn't even know what porn was!\" The robot slaps the father. The mom chimes in, \"Haha! After all, he is your son!\" The robot slaps the mother."},{"id":52574,"joke":"Q: What is the difference between the American flag and American Idol?\nA: The American flag actually has stars."}]
}

    @action async fetchJoke(tags?: string) {
        this.fetching = true
        try {
            const response = await superInstance.get(`https://api.humorapi.com/jokes/search`, {
                params:{
                    "api-key":useEnv().apiKey,
                    keywords: tags ? tags : "",
                    number:10
                }
            })
            this.setJokes(response.data)
        } catch (error) {
            throw error
        } finally {
            this.fetching = false
        }
    }

    @action setJokes(jokes: Array<Joke>) {
        this.jokes = jokes
    }

    get allJokes(){
        return this.jokes
    }

    get isfetching(){
        return this.fetching
    }





}