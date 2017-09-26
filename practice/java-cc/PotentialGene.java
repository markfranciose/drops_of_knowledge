/* 
Compilation: javac PotentialGene.java
Execution: java PotentialGene < input.txt

Determines whether a DNA string corresponds to a potential gene.
	- length is a multiple of 3
	- Starts with the start codon (ATG)
	- ends with a stop codon (TAA or TAG or TGA)
	- has no intervening stop codons

% java PotentialGene ATGCGCCTGCGTCTGTACTAG
	true

% java PotentialGene AAAAAAAAAAAAAAAATTTTTTTTTTTTTTTGGGGGGGGG
	false

 */

public class PotentialGene {
	public static boolean isPotentialGene(String dna) {

		// Length is a multiple of 3
		if (dna.length() % 3 != 0) return false;

		// Stars with a start codon
		if (!dna.startsWith("ATG")) return false;

		// No intervening stop codons
		for (int i = 3; i < dna.length() - 3; i += 1) {
			if (i % 3 == 0) {
				String codon = dna.substring(i, i + 3);
				if (codon.equals("TAA")) return false;
				if (codon.equals("TAG")) return false;
				if (codon.equals("TGA")) return false;
			}
		}

		// Ends with a stop codon
		if (dna.endsWith("TAA")) return true;
		if (dna.endsWith("TAG")) return true;
		if (dna.endsWith("TGA")) return true;

		return false;
	}

	public static void main(String[] args) {
		String dna = args[0];
		System.out.println(isPotentialGene(dna));
	}
}

