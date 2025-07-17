import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid 
      columns={{ sm: 1, md: 2, lg: 3, xl: 5}} 
      padding="10px" 
      spacing={3}>
        {isLoading &&
          Skeleton.map((Skeleton) => 
          <GameCardContainer> 
            <GameCardSkeleton key={Skeleton} />
          </GameCardContainer>
        )}
        {data.map((data) => (
          <GameCardContainer>
            <GameCard key={data.id} game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
