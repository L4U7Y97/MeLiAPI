import express from 'express';
import { Author } from '../domain/Author';
import { Item, ItemWithDetails } from '../domain/Item';
import { getItemsService, getItemWithDetailsService } from '../service/items/service';

const router = express.Router();

export interface ItemsResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemWithDetailsResponse {
  author: Author;
  item: ItemWithDetails;
}

router.get<{}, ItemsResponse, never, { q: string }>('/', async (req, res) => {
  res.json(await getItemsService(req.query.q));
});

router.get<{ id: string }, ItemWithDetailsResponse>('/:id', async (req, res) => {
  res.json(await getItemWithDetailsService(req.params.id));
});

export default router;
