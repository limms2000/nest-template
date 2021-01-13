import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';
import {MovieService} from './movie.service';
@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService){}
    @Get()
    getAll():Movie[]{
        return this.movieService.getAll();
    };
    @Get(`search`)
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie with a title : `;
    }
    @Get('/:id')
    getOne(@Param(`id`)id:number):Movie{
        console.log(typeof id)
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData:CreateMovieDto){
        
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId:number,@Body() updateData:UpdateMovieDto){
        return this.movieService.update(movieId,updateData);
    }

    
}