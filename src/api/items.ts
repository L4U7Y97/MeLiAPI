import express from 'express';
import { Author } from '../domain/Author';
import { Item, ItemWithDetails } from '../domain/Item';
import { getItemsService } from '../service/items/service';

const router = express.Router();

export interface ItemsResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

interface ItemWithDetailsResponse {
  
}

router.get<{}, ItemsResponse, never, { q: string }>('/', async (req, res) => {
  res.json(await getItemsService(req.query.q));
});

router.get<{ id: string }, ItemWithDetailsResponse>('/:id', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
